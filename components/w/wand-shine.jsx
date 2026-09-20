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
		"content": `<style>.vbtu5kb7i {
  fill: currentColor;
  d: path("M8.66 7.398L6.37 5.11l.713-.714l2.289 2.289zm3.84-2.163v-3.25h1v3.25zm6.39 12.394l-2.288-2.289l.714-.713l2.288 2.289zM17.7 7.014l-.713-.714l2.288-2.288l.714.713zm1.066 4.486v-1h3.25v1zM5.163 20.508l-1.691-1.69q-.242-.243-.242-.566t.242-.565l8.517-8.523q.587-.587 1.414-.587t1.413.587t.587 1.413t-.587 1.414l-8.523 8.517q-.242.242-.565.242t-.565-.242m6.84-7.106l2.1-2.125q.3-.3.3-.7t-.3-.7q-.281-.28-.7-.28t-.7.28l-2.125 2.125z");
}
</style><path class="vbtu5kb7i"/>`,
		"fallback": "material-symbols-light:wand-shine",
	});
}

export default Component;
