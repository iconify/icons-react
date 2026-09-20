import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzf8o-bpc.css';
import '../../css/l/lkt4b8bkv.css';
import '../../css/t/tncpom-al.css';
import '../../css/o/o2i8a6buf.css';
import '../../css/a/awnap3_pg.css';
import '../../css/p/p7c_clb3p.css';
import '../../css/j/j980odbda.css';
import '../../css/g/gipwh9_9j.css';
import '../../css/y/ytvhngqbx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gzf8o-bpc"/><circle class="lkt4b8bkv"/><path class="tncpom-al"/><path class="o2i8a6buf"/><path class="awnap3_pg"/><circle class="p7c_clb3p"/><circle class="j980odbda"/><circle class="gipwh9_9j"/><circle class="ytvhngqbx"/>`,
		"fallback": "openmoji:timer",
	});
}

export default Component;
