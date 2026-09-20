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
		"content": `<style>.qeuvkn_pw {
  fill: currentColor;
  d: path("M7.066 10.374q.126-.126.126-.316v-.116q0-.19-.126-.316Q6.941 9.5 6.75 9.5t-.316.126q-.126.126-.126.316v.116q0 .19.126.316q.125.126.316.126t.316-.126m2.5 2q.126-.126.126-.316V7.942q0-.19-.126-.316T9.25 7.5t-.316.126t-.126.316v4.116q0 .19.126.316t.316.126t.316-.126m2.75 2q.126-.126.126-.316V5.942q0-.19-.126-.316T12 5.5t-.316.126t-.126.316v8.116q0 .19.126.316T12 14.5t.316-.126m2.75-2q.126-.126.126-.316V7.942q0-.19-.126-.316T14.75 7.5t-.316.126t-.126.316v4.116q0 .19.126.316t.316.126t.316-.126m2.5-2q.126-.126.126-.316v-.116q0-.19-.126-.316q-.125-.126-.316-.126t-.316.126q-.126.126-.126.316v.116q0 .19.126.316q.125.126.316.126t.316-.126M6.077 17l-1.704 1.704q-.379.379-.876.174T3 18.133V4.616q0-.691.463-1.153T4.616 3h14.769q.69 0 1.153.463T21 4.616v10.769q0 .69-.462 1.153T19.385 17zm-.427-1h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z");
}
</style><path class="qeuvkn_pw"/>`,
		"fallback": "material-symbols-light:voice-chat-outline-rounded",
	});
}

export default Component;
