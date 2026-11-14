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
		"content": `<style>.w0l7gxb8o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.758 4.796l-7.5-2.75Q12.133 2 12 2t-.258.046l-7.5 2.75q-.108.04-.2.11q-.091.07-.157.165q-.066.094-.1.204q-.035.11-.035.225v5.75h16.5V5.5q0-.115-.035-.225q-.034-.11-.1-.204q-.066-.095-.157-.165q-.092-.07-.2-.11m.43 7.954H3.812q.64 6.305 7.911 9.197q.133.053.277.053t.277-.053q7.271-2.892 7.911-9.197");
}
</style><path class="w0l7gxb8o"/>`,
		"fallback": "uix-solid:shield-scan",
	});
}

export default Component;
