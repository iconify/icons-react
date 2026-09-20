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
		"content": `<style>.p4z671bfz {
  fill: currentColor;
  d: path("M7 19.77h10v-1h-4.5v-8.547l2.1 2.1l.708-.707L12 8.308l-3.308 3.308l.708.707l2.1-2.1v8.546H7zM4.616 15q-.691 0-1.153-.462T3 13.385v-7.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v7.769q0 .69-.463 1.153T19.385 15H15v-1h4.385q.23 0 .423-.192t.192-.423v-7.77q0-.23-.192-.423T19.385 5H4.615q-.23 0-.423.192T4 5.616v7.769q0 .23.192.423t.423.192H9v1z");
}
</style><path class="p4z671bfz"/>`,
		"fallback": "material-symbols-light:open-jam-outline",
	});
}

export default Component;
