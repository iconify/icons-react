import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iu9akzaqj.css';
import '../../css/x/x_ngs1ynm.css';
import '../../css/z/zk_pvmbnr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzHGZTdva"><g class="wwvp95byt"><path class="iu9akzaqj"/><path class="x_ngs1ynm"/><path class="zk_pvmbnr"/></g></mask></defs><path mask="url(#SVGzHGZTdva)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:soybean-milk-maker",
	});
}

export default Component;
