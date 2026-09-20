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
		"content": `<style>.t-rb9-z-f {
  fill: currentColor;
  d: path("M12.77 18.116v-11H9V5.885h5v12.23z");
}
</style><path class="t-rb9-z-f"/>`,
		"fallback": "material-symbols-light:timer-1",
	});
}

export default Component;
