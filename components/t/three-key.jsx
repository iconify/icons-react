import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/n/nt5m5-ejp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsrsfK6ck"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="nt5m5-ejp"/></g></mask></defs><path mask="url(#SVGsrsfK6ck)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:three-key",
	});
}

export default Component;
