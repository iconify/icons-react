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
		"content": `<style>.p2-hahz3g {
  fill: currentColor;
  d: path("M14.692 19H4.654q-.51 0-.727-.454t.1-.857l4.165-5.304q.135-.173.135-.385t-.135-.385L4.027 6.293q-.317-.403-.1-.857t.727-.454h10.019q.379 0 .718.154q.338.155.555.453l4.27 5.404q.361.448.361 1.008t-.362 1.008l-4.25 5.384q-.217.299-.556.453q-.338.155-.717.155");
}
</style><path class="p2-hahz3g"/>`,
		"fallback": "material-symbols-light:label-important-rounded",
	});
}

export default Component;
