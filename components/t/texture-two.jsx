import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/ctlf8t4lu.css';
import '../../css/m/mhgeykkaq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNfqbldQf"><g class="wwvp95byt"><path class="ctlf8t4lu"/><path class="mhgeykkaq"/></g></mask></defs><path mask="url(#SVGNfqbldQf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:texture-two",
	});
}

export default Component;
