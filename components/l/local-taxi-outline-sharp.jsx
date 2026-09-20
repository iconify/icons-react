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
		"content": `<style>.w20yoflvj {
  fill: currentColor;
  d: path("M5.23 18v2H4v-7.846L6.162 6h3.761V4.462h4.23V6h3.686L20 12.154V20h-1.23v-2zm.186-6.846h13.169L17.112 7H6.889zm-.416 1V17zm2.428 3.538q.466 0 .788-.326q.323-.327.323-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.793.321m9.155 0q.466 0 .788-.326q.322-.327.322-.794q0-.466-.326-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.794.321M5 17h14v-4.846H5z");
}
</style><path class="w20yoflvj"/>`,
		"fallback": "material-symbols-light:local-taxi-outline-sharp",
	});
}

export default Component;
