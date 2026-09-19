import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.apxa9-b2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.462 26.083c-.925-9.014-8.736-13.436-14.484-21.526c-.069-.097-.224-.064-.246.053c-.697 3.69-3.62 11.221-4.702 12.854c-.46.693-3.155 5.67-3.545 10.744c-.74 9.62 5.132 15.712 12.477 15.27c7.92-.478 11.31-9.502 10.5-17.395");
}
</style><path class="apxa9-b2c"/>`,
		"fallback": "arcticons:mitoza",
	});
}

export default Component;
