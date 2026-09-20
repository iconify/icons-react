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
		"content": `<style>.mx3-i28vs {
  fill: currentColor;
  d: path("M12.675 20.425L10.05 13.95l-6.475-2.625q-.325-.125-.475-.387t-.15-.538t.163-.537t.487-.388l4.275-1.6L3.5 3.5q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3l-4.375-4.35l-1.6 4.275q-.125.325-.387.488t-.538.162t-.537-.15t-.388-.475M20.3 4.463q.075.287-.05.587l-2.025 5.475q-.2.5-.725.625t-.925-.275l-3.45-3.45q-.4-.4-.275-.925t.625-.725L18.95 3.75q.3-.125.588-.05t.487.275t.275.488");
}
</style><path class="mx3-i28vs"/>`,
		"fallback": "material-symbols:near-me-disabled-rounded",
	});
}

export default Component;
