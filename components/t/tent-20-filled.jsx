import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xtc4qm0kn {
  fill: currentColor;
  d: path("M10.4 2.818a.5.5 0 0 0-.767 0c-1.197 1.435-3.558 3.14-4.916 3.898a.5.5 0 0 0-.251.368L3.375 15H2.5a.5.5 0 0 0 0 1h3.936q.05.01.1.01h6.906a.5.5 0 0 0 .1-.01H17.5a.5.5 0 0 0 0-1h-.841l-1.09-7.916a.5.5 0 0 0-.252-.368c-1.358-.758-3.72-2.463-4.916-3.898M7.516 15.01c.839-1.22 1.704-2.786 2.485-5.261c.706 2.233 1.493 3.776 2.486 5.261z");
}
</style><path class="xtc4qm0kn"/>`,
		"fallback": "fluent:tent-20-filled",
	});
}

export default Component;
