import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aqhc3dbwk.css';
import '../../css/b/bpfzin4my.css';
import '../../css/t/tdxbuxf-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGq7rAbtY"><g class="wwvp95byt"><path class="aqhc3dbwk"/><path class="bpfzin4my"/><path class="tdxbuxf-u"/></g></mask></defs><path mask="url(#SVGGq7rAbtY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:iron-two",
	});
}

export default Component;
