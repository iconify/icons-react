import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfhiarb1q.css';
import '../../css/n/nx5d-bc1s.css';
import '../../css/x/xbragqbkw.css';
import '../../css/p/phrr0cbor.css';
import '../../css/v/v30kfmvfo.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfhiarb1q"/><g class="nx5d-bc1s"><path class="xbragqbkw"/><path class="phrr0cbor"/><path class="v30kfmvfo"/></g>`,
		"fallback": "thesvg-color:seonib",
	});
}

export default Component;
