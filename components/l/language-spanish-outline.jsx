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
		"content": `<style>.yfz4n2a9p {
  fill: currentColor;
  d: path("M14.616 16.5q-.691 0-1.153-.462T13 14.885V14.5h1v.385q0 .269.173.442t.443.173h2.769q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173h-2.77q-.69 0-1.152-.462T13 10.885v-1.77q0-.69.463-1.152t1.153-.463h2.769q.69 0 1.153.463T19 9.116V9.5h-1v-.385q0-.269-.173-.442t-.442-.173h-2.77q-.269 0-.442.173T14 9.116v1.769q0 .269.173.442t.443.173h2.769q.69 0 1.153.463T19 13.116v1.769q0 .69-.462 1.153t-1.154.462zM5 7.5h6v1H6v3h4v1H6v3h5v1H5z");
}
</style><path class="yfz4n2a9p"/>`,
		"fallback": "material-symbols-light:language-spanish-outline",
	});
}

export default Component;
