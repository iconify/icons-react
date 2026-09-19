import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wq8id7bna.css';
import '../../css/h/hcut8fbid.css';
import '../../css/l/lbzw94bgu.css';
import '../../css/a/ax-ra-big.css';
import '../../css/h/h_9oyac_y.css';
import '../../css/a/ascictbra.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV0EwxdyF"><g class="wwvp95byt"><rect class="wq8id7bna"/><path class="hcut8fbid"/><path class="lbzw94bgu"/><path class="ax-ra-big"/><path class="h_9oyac_y"/><path class="ascictbra"/></g></mask></defs><path mask="url(#SVGV0EwxdyF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:razor",
	});
}

export default Component;
