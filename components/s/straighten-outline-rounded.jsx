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
		"content": `<style>.y4ap3db0v {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.385v-6.77q0-.69.463-1.152T4.615 7h14.77q.69 0 1.152.463T21 8.616v6.769q0 .69-.463 1.153T19.385 17zm0-1h14.769q.23 0 .423-.192t.192-.423v-6.77q0-.23-.192-.423T19.385 8H16.5v2.73q0 .214-.143.358T16 11.23t-.357-.143t-.143-.357V8h-3v2.73q0 .214-.143.358T12 11.23t-.357-.143t-.143-.357V8h-3v2.73q0 .214-.143.358T8 11.23t-.357-.143t-.143-.357V8H4.616q-.231 0-.424.192T4 8.616v6.769q0 .23.192.423t.423.192M12 12");
}
</style><path class="y4ap3db0v"/>`,
		"fallback": "material-symbols-light:straighten-outline-rounded",
	});
}

export default Component;
