import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amn_b-_3e.css';
import '../../css/n/ncz70n-in.css';
import '../../css/s/s00rndbem.css';
import '../../css/k/k39h0tblb.css';
import '../../css/y/y6fqwjbfy.css';
import '../../css/m/m-l90ob2o.css';
import '../../css/l/l_8clz36z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amn_b-_3e"/><path class="ncz70n-in"/><path class="s00rndbem"/><path class="k39h0tblb"/><path class="y6fqwjbfy"/><path class="m-l90ob2o"/><path class="l_8clz36z"/>`,
		"fallback": "openmoji:person-medium-dark-skin-tone-blond-hair",
	});
}

export default Component;
