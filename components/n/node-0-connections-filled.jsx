import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s98hn0ejv.css';
import '../../css/b/bqbfju-hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s98hn0ejv"/><path clip-rule="evenodd" class="bqbfju-hn"/>`,
		"fallback": "bitcoin-icons:node-0-connections-filled",
	});
}

export default Component;
