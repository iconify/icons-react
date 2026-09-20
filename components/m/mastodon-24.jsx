import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-hxxlioz.css';
import '../../css/n/nd5zkmbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-hxxlioz"/><path clip-rule="evenodd" class="nd5zkmbhd"/>`,
		"fallback": "qlementine-icons:mastodon-24",
	});
}

export default Component;
