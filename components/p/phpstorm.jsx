import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku3hjnb4p.css';
import '../../css/y/y89kl6-cj.css';
import '../../css/y/yml2ess9o.css';
import '../../css/z/zfmps490f.css';
import '../../css/i/ido_zjb_f.css';
import '../../css/a/ag4zxnboq.css';
import '../../css/c/caaistbve.css';
import '../../css/a/avs9h2zdy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGL4F39dES" x1="56.379" x2="2.753" y1="-.717" y2="24.146" gradientTransform="translate(0 45.763)scale(.46618)" gradientUnits="userSpaceOnUse"><stop offset=".16" class="ku3hjnb4p"/><stop offset=".55" class="y89kl6-cj"/></linearGradient><linearGradient id="SVGJOTwIcOP" x1="3.982" x2="62.687" y1="4.224" y2="62.93" gradientTransform="translate(0 45.763)scale(.46618)" gradientUnits="userSpaceOnUse"><stop offset=".3" class="y89kl6-cj"/><stop offset=".7" class="yml2ess9o"/></linearGradient></defs><path class="zfmps490f"/><path fill="url(#SVGL4F39dES)" transform="translate(.002 -196.329)scale(4.2901)" class="ido_zjb_f"/><path fill="url(#SVGJOTwIcOP)" transform="translate(.002 -196.329)scale(4.2901)" class="ag4zxnboq"/><path class="caaistbve"/><path class="avs9h2zdy"/>`,
		"fallback": "devicon:phpstorm",
	});
}

export default Component;
