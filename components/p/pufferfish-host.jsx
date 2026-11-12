import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9vm3113w.css';
import '../../css/n/nga9fqpvv.css';
import '../../css/p/pzqb4kb6y.css';
import '../../css/m/m2da_cgah.css';
import '../../css/e/ekvd14b6x.css';
import '../../css/e/ez9jcpjax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9vm3113w"/><path class="nga9fqpvv"/><path class="pzqb4kb6y"/><path class="m2da_cgah"/><path class="ekvd14b6x"/><path class="ez9jcpjax"/>`,
		"fallback": "selfhst:pufferfish-host",
	});
}

export default Component;
