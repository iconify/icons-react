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
		"content": `<style>.k2bdzsati {
  fill: currentColor;
  d: path("M11 2.049v6.076c-.362.094-.71.238-1.033.428L5.671 4.256A10 10 0 0 1 11 2.049m7.329 2.207l-4.296 4.297A4 4 0 0 0 13 8.125V2.049a10 10 0 0 1 5.329 2.207M21.801 10h-6.335l-.019-.033l4.297-4.296A10 10 0 0 1 21.801 10M2.199 10a10 10 0 0 1 2.057-4.329l4.297 4.296l-.019.033ZM2 15v-3h6v3Zm14-3h6v3h-6Zm-8 5v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4Zm14 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z");
}
</style><path class="k2bdzsati"/>`,
		"fallback": "coolicons:tunnel-fill-sharp",
	});
}

export default Component;
