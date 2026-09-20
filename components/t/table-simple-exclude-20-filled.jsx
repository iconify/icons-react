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
		"content": `<style>.vhcpikybp {
  fill: currentColor;
  d: path("M4.5 2H8v6H2V4.5A2.5 2.5 0 0 1 4.5 2M2 9v3.5A2.5 2.5 0 0 0 4.5 15H8V9zm13-1V4.5A2.5 2.5 0 0 0 12.5 2H9v6zm-4 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z");
}
</style><path class="vhcpikybp"/>`,
		"fallback": "fluent:table-simple-exclude-20-filled",
	});
}

export default Component;
