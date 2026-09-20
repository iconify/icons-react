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
		"content": `<style>.xlm7bub7c {
  fill: currentColor;
  d: path("M16.6 19.575q-.425 0-.7-.275l-4.3-4.325q-.275-.275-.437-.637T11 13.575v-6.7L9.125 8.75q-.3.3-.712.3t-.713-.3t-.3-.7t.3-.7l3.6-3.625q.15-.15.325-.212T12 3.45t.375.063t.325.212L16.3 7.3q.3.3.3.713t-.3.712t-.712.313t-.713-.288L13 6.875V13.6l4.3 4.3q.275.275.275.7t-.275.7t-.7.275m-9.9-.25q-.3-.3-.287-.712t.287-.688l1.775-1.8q.3-.3.713-.3t.712.3t.288.713t-.313.712L8.1 19.325q-.275.275-.7.275t-.7-.275");
}
</style><path class="xlm7bub7c"/>`,
		"fallback": "material-symbols:merge-type-rounded",
	});
}

export default Component;
