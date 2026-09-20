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
		"content": `<style>.fjij08tig {
  fill: currentColor;
  d: path("M4.616 18h14.769q.23 0 .423-.192t.192-.424V10h-6.192q-.349 0-.578-.23T13 9.192V6H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192m0 1q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM4 18V6z");
}
</style><path class="fjij08tig"/>`,
		"fallback": "material-symbols-light:tab-outline-rounded",
	});
}

export default Component;
