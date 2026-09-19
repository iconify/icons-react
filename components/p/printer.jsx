import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgp21hwsg.css';
import '../../css/a/awxvj7b1n.css';
import '../../css/s/sodpulb5k.css';
import '../../css/u/u3kivv9wu.css';
import '../../css/u/ufvcruebt.css';
import '../../css/m/mf-vjob5j.css';
import '../../css/u/u0-7-ac6y.css';
import '../../css/s/ssz67fb-c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgp21hwsg"/><path class="awxvj7b1n"/><path class="sodpulb5k"/><path class="u3kivv9wu"/><path class="ufvcruebt"/><path class="mf-vjob5j"/><path class="u0-7-ac6y"/><path class="ssz67fb-c"/>`,
		"fallback": "flat-ui:printer",
	});
}

export default Component;
