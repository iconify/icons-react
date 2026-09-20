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
		"content": `<style>.smat-rb4u {
  fill: currentColor;
  d: path("M4 16q-.425 0-.712-.288T3 15t.288-.712T4 14h6q.425 0 .713.288T11 15t-.288.713T10 16zm0-4q-.425 0-.712-.288T3 11t.288-.712T4 10h10q.425 0 .713.288T15 11t-.288.713T14 12zm0-4q-.425 0-.712-.288T3 7t.288-.712T4 6h10q.425 0 .713.288T15 7t-.288.713T14 8zm11.975 10.513q-.175-.063-.325-.213l-2.15-2.15q-.275-.275-.287-.687t.287-.713q.275-.275.688-.288t.712.263l1.45 1.425l3.525-3.525q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7l-4.25 4.25q-.15.15-.325.213t-.375.062t-.375-.062");
}
</style><path class="smat-rb4u"/>`,
		"fallback": "material-symbols:playlist-add-check-rounded",
	});
}

export default Component;
