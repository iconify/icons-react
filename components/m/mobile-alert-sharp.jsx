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
		"content": `<style>.ebvncqbir {
  fill: currentColor;
  d: path("M12.434 16.28q.182-.182.182-.434t-.182-.433T12 15.23t-.434.182t-.182.433t.182.434t.434.181t.434-.181M11.5 13.5h1V7.423h-1zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="ebvncqbir"/>`,
		"fallback": "material-symbols-light:mobile-alert-sharp",
	});
}

export default Component;
