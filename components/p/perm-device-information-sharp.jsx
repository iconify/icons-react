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
		"content": `<style>.w46j4zb4k {
  fill: currentColor;
  d: path("M11 16.5V11h2v5.5zM12 9q-.425 0-.712-.288T11 8t.288-.712T12 7t.713.288T13 8t-.288.713T12 9M5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="w46j4zb4k"/>`,
		"fallback": "material-symbols:perm-device-information-sharp",
	});
}

export default Component;
