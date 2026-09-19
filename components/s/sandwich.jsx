import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/ovi4-kvzp.css';
import '../../css/g/ggwztabin.css';
import '../../css/j/jznt5ac4w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGj828mb8c"><g class="wwvp95byt"><path class="ovi4-kvzp"/><path class="ggwztabin"/><path class="jznt5ac4w"/></g></mask></defs><path mask="url(#SVGj828mb8c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sandwich",
	});
}

export default Component;
