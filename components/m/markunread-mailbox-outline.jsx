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
		"content": `<style>.pqugogasj {
  fill: currentColor;
  d: path("M6.616 14v-4h-2q-.231 0-.424.192T4 10.616v8.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423v-8.77q0-.23-.192-.423T19.385 10H10V9h9.385q.69 0 1.153.463T21 10.616v8.769q0 .69-.462 1.153T19.385 21H4.615q-.69 0-1.152-.462T3 19.385v-8.77q0-.69.463-1.152T4.615 9h2V3h6.5v3.616h-5.5V14zM4 10v4zv10z");
}
</style><path class="pqugogasj"/>`,
		"fallback": "material-symbols-light:markunread-mailbox-outline",
	});
}

export default Component;
