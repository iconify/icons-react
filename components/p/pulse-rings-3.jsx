import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm2moacxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(0 0 0 0 12 12)" class="lm2moacxj"><animateTransform id="SVGr0dxBdJO" attributeName="transform" begin="0;SVG7Xy0ecki.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"/><animateTransform additive="sum" attributeName="transform" begin="0;SVG7Xy0ecki.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"/><animate attributeName="opacity" begin="0;SVG7Xy0ecki.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></path><path transform="matrix(0 0 0 0 12 12)" class="lm2moacxj"><animateTransform id="SVGp2dhBhxA" attributeName="transform" begin="SVGr0dxBdJO.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"/><animateTransform additive="sum" attributeName="transform" begin="SVGr0dxBdJO.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"/><animate attributeName="opacity" begin="SVGr0dxBdJO.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></path><path transform="matrix(0 0 0 0 12 12)" class="lm2moacxj"><animateTransform id="SVG7Xy0ecki" attributeName="transform" begin="SVGr0dxBdJO.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"/><animateTransform additive="sum" attributeName="transform" begin="SVGr0dxBdJO.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"/><animate attributeName="opacity" begin="SVGr0dxBdJO.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></path>`,
		"fallback": "svg-spinners:pulse-rings-3",
	});
}

export default Component;
