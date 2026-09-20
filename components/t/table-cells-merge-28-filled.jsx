import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kb0bzubrw {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v.75h22v-.75A3.75 3.75 0 0 0 21.25 3zM25 9H3v10h22zm-6.42 4.25l-.89-1.002a.75.75 0 0 1 1.12-.996l1.998 2.247a.75.75 0 0 1 .013.987l-.01.012l-2 2.25a.75.75 0 1 1-1.122-.996l.89-1.002H9.42l.89 1.002a.75.75 0 0 1-1.12.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996l-.89 1.002zM25 20.5H3v.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25z");
}
</style><path class="kb0bzubrw"/>`,
		"fallback": "fluent:table-cells-merge-28-filled",
	});
}

export default Component;
