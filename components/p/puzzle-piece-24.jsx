import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezrb3sb2s.css';
import '../../css/s/syjz94bfs.css';
import '../../css/a/aq8w4_bqf.css';
import '../../css/c/c8pavbbjd.css';
import '../../css/a/alal1lbgu.css';
import '../../css/d/dekk04dsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGycu7nd5J)" class="ezrb3sb2s"/><path fill="url(#SVGwtIjod3B)" class="syjz94bfs"/><defs><linearGradient id="SVGycu7nd5J" x1="5.833" x2="16.883" y1=".889" y2="21.761" gradientUnits="userSpaceOnUse"><stop class="aq8w4_bqf"/><stop offset="1" class="c8pavbbjd"/></linearGradient><linearGradient id="SVGwtIjod3B" x1="14.131" x2="18.725" y1="4.456" y2="23.861" gradientUnits="userSpaceOnUse"><stop offset=".533" class="alal1lbgu"/><stop offset="1" class="dekk04dsn"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:puzzle-piece-24",
	});
}

export default Component;
