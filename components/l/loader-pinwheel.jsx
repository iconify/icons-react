import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/plv6wabjd.css';
import '../../css/d/d_vxw9yeb.css';
import '../../css/h/hvm4n6b8w.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="plv6wabjd"/><path class="d_vxw9yeb"/><path class="hvm4n6b8w"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "lucide:loader-pinwheel",
	});
}

export default Component;
