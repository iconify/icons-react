import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g4rolz43l.css';
import '../../css/r/r7udx8u2s.css';
import '../../css/x/xh9u0qbzf.css';
import '../../css/v/vbmjdcbgj.css';
import '../../css/z/z0y41rw_j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzuE2PbkR"><g class="ufeehvblu"><rect class="g4rolz43l"/><path class="r7udx8u2s"/><path class="xh9u0qbzf"/><path class="vbmjdcbgj"/><path class="z0y41rw_j"/></g></mask></defs><path mask="url(#SVGzuE2PbkR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:refrigerator",
	});
}

export default Component;
