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
		"content": `<style>.thyamebhm {
  fill: currentColor;
  d: path("M148 152a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20-36a16 16 0 1 0-16-16a16 16 0 0 0 16 16m104 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-68 24a35.93 35.93 0 0 0-14.19-28.61a32 32 0 1 0-43.62 0A36 36 0 1 0 164 152");
}
</style><path class="thyamebhm"/>`,
		"fallback": "ph:number-circle-eight-fill",
	});
}

export default Component;
