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
		"content": `<style>.rd6dp8-0p {
  fill: currentColor;
  d: path("M8.654 19v-.975h1.48q.27 0 .443-.173t.173-.442V6.616q0-.27-.173-.443T10.135 6H8.654V5h1.48q.691 0 1.153.463t.463 1.153v10.769q0 .69-.462 1.153T10.135 19zm7.096 0q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152T15.75 5h4.635q.69 0 1.152.463T22 6.616v10.769q0 .69-.463 1.153T20.385 19zM5.712 15.116l-.714-.708l1.96-1.908H2v-1h4.958l-1.96-1.883l.694-.713L8.885 12z");
}
</style><path class="rd6dp8-0p"/>`,
		"fallback": "material-symbols-light:transition-push",
	});
}

export default Component;
