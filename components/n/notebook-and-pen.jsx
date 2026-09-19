import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p-7oghbwj.css';
import '../../css/b/bf6nontsy.css';
import '../../css/l/l2agplb8a.css';
import '../../css/m/mjh9l4bmz.css';
import '../../css/o/o731z77nb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4GYOae4z"><g class="wwvp95byt"><path class="p-7oghbwj"/><path class="bf6nontsy"/><path class="l2agplb8a"/><path class="mjh9l4bmz"/><path class="o731z77nb"/></g></mask></defs><path mask="url(#SVG4GYOae4z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:notebook-and-pen",
	});
}

export default Component;
