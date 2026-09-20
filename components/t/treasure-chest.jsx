import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p8kribjwq.css';
import '../../css/f/fsz231bss.css';
import '../../css/k/k07vgq36i.css';
import '../../css/y/ymkfi9a7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p8kribjwq"/><path class="fsz231bss"/><path class="k07vgq36i"/><path class="ymkfi9a7f"/></g>`,
		"fallback": "streamline-plump-color:treasure-chest",
	});
}

export default Component;
