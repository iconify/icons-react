import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.io285fmdw {
  fill: currentColor;
  d: path("M15 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L9.5 6.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708M10.5 11c.9 0 1.75-.216 2.5-.6V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8.337l5.763 3.103a.5.5 0 0 0 .474 0l1.411-.76c.579.207 1.202.32 1.852.32M3 5h2.022a5.5 5.5 0 0 0 2.522 5.14L7 10.431l-6-3.23V7a2 2 0 0 1 2-2");
}
</style><path class="io285fmdw"/>`,
		"fallback": "fluent:mail-checkmark-16-filled",
	});
}

export default Component;
