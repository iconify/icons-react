import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.typopp2qo {
  fill: currentColor;
  d: path("M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 32a20 20 0 1 0 20 20a20 20 0 0 0-20-20m96-84v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-60 104a35.93 35.93 0 0 0-14.19-28.61a32 32 0 1 0-43.62 0A36 36 0 1 0 164 152");
}
</style><path class="typopp2qo"/>`,
		"fallback": "ph:number-square-eight-fill",
	});
}

export default Component;
