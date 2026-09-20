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
		"content": `<style>.b9yn991kt {
  fill: currentColor;
  d: path("M3 23V1h18v22zm2-7h14V6H5zm7.713 4.213Q13 19.925 13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287t.713-.288");
}
</style><path class="b9yn991kt"/>`,
		"fallback": "material-symbols:tablet-mac-sharp",
	});
}

export default Component;
