import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhpyq2aym.css';
import '../../css/n/n005qxbmk.css';
import '../../css/f/fqdenqbaq.css';
import '../../css/w/wvaytaojv.css';
import '../../css/j/jag4kdbff.css';
import '../../css/q/qv7b_0bre.css';
import '../../css/d/dsrvnzqwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhpyq2aym"/><path class="n005qxbmk"/><path class="fqdenqbaq"/><path class="wvaytaojv"/><path class="jag4kdbff"/><path class="qv7b_0bre"/><path class="dsrvnzqwf"/>`,
		"fallback": "fxemoji:smallfrown",
	});
}

export default Component;
