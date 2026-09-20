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
		"content": `<style>.s9bh9n56n {
  fill: currentColor;
  d: path("M11.625 21.513q-.175-.063-.325-.213l-5.6-5.6q-.275-.275-.275-.7t.275-.7q.3-.3.713-.287t.687.287l3.9 3.875V3q0-.425.288-.712T12 2t.713.288T13 3v15.175l3.875-3.875q.3-.3.713-.3t.712.3q.275.3.275.713t-.275.687l-5.6 5.6q-.15.15-.325.213t-.375.062t-.375-.062");
}
</style><path class="s9bh9n56n"/>`,
		"fallback": "material-symbols:south-outline-rounded",
	});
}

export default Component;
