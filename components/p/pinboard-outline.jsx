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
		"content": `<style>.pzc0n6suo {
  fill: currentColor;
  d: path("m6.808 21l-.5-.5v-4.27H3v-1l1.423-2.86V9.384H3v-1h7.616v1H9.192v2.984l1.424 2.862v1H7.308v4.27zm5.634-2v-1h6.943q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T19.385 6H3q0-.402.299-.701T4 5h15.385q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19zm-8.296-3.77H9.47l-1.278-2.54V9.385H5.423v3.304zm2.662 0");
}
</style><path class="pzc0n6suo"/>`,
		"fallback": "material-symbols-light:pinboard-outline",
	});
}

export default Component;
