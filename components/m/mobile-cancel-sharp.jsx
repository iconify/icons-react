import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dfl_e-8_n {
  fill: currentColor;
  d: path("M9.65 15.058L12 12.713l2.344 2.345l.714-.708l-2.35-2.35l2.35-2.344l-.714-.714L12 11.292l-2.35-2.35l-.708.714L11.287 12l-2.345 2.35zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="dfl_e-8_n"/>`,
		"fallback": "material-symbols-light:mobile-cancel-sharp",
	});
}

export default Component;
