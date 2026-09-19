import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jdvggry0v.css';
import '../../css/p/p3jx5fbnp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOB5YwbPT"><g class="wwvp95byt"><path clip-rule="evenodd" class="jdvggry0v"/><path class="p3jx5fbnp"/></g></mask></defs><path mask="url(#SVGOB5YwbPT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:keyhole",
	});
}

export default Component;
