import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cci9ae_nq.css';
import '../../css/o/oexqymb-g.css';
import '../../css/l/lkh3vr24w.css';
import '../../css/z/zcnczmjty.css';
import '../../css/z/zh8221lvv.css';
import '../../css/g/gapgxrbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cci9ae_nq"/><path clip-rule="evenodd" class="oexqymb-g"/><path clip-rule="evenodd" class="lkh3vr24w"/><path class="zcnczmjty"/><path class="zh8221lvv"/><path class="gapgxrbjo"/>`,
		"fallback": "solar:share-circle-outline",
	});
}

export default Component;
