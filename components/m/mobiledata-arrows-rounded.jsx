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
		"content": `<style>.vyz2038ba {
  fill: currentColor;
  d: path("M8 17.15v-6.175q0-.425.288-.712T9 9.975t.713.288t.287.712v6.175l.85-.85q.3-.3.7-.288t.7.288q.3.3.312.713t-.287.712L9.7 20.3q-.3.3-.7.3t-.7-.3l-2.575-2.575q-.3-.3-.287-.712t.312-.713q.3-.275.7-.288t.7.288zM14 6.8l-.9.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-.9-.9v6.175q0 .425-.287.713t-.713.287t-.712-.287t-.288-.713z");
}
</style><path class="vyz2038ba"/>`,
		"fallback": "material-symbols:mobiledata-arrows-rounded",
	});
}

export default Component;
